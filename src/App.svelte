<script>
	import { get } from 'svelte/store'
	import { writable } from 'svelte-local-storage-store'
	import {sortRandom} from "./utils"
	import Card from "./components/Card.svelte"
	import ButtonRestart from "./components/elements/Btn-restart.svelte";
	import Stopwatch from "./components/Stopwatch.svelte";
	import Modal from "./components/Modal.svelte";
	export let name, cardLimit
	
	let loopsLS = writable('loopsLS', [])// данные о предыдущих играх из localStorage
	let images = ['bagz-banni', 'di-kaprio', 'fff', 'gajduljan', 'gigachad', 'hirosi', 'ilon', 'joker', 'kit', 'kit2', 'kot-sidit', 'laska', 'loaded', 'loki', 'nelzya', 'nosorog', 'pica', 'privet-piter', 'problemy', 'rasseivajushchijsja-kot', 'redkliff', 'satana', 'shak', 'skeletor', 'sobaka-ispugannaja', 'th', 'tolstyy-tor', 'u-suka', 'ugvey', 'uill-smit', 'unichtozhu', 'vazovski', 'yoda', 'nu-davay-rasskazhi', 'babochka', 'karlik', 'kit-3', 'or', 'sad_fox', 'edvard-norton', 'nikolson', 'yeah-boy', 'kit-5', 'aww', 'tom-2', 'doge-bear', 'billi', 'blya', 'pablo-eskobar', 'skwid', 'momo', 'papich', 'kit-4', 'serious_cat', 'tom', 'eskobar', 'nqjlh1gk5e0'];
	let gameModeLS = writable('gameModeLS', )
	let gameMode = get(gameModeLS); 
	let cardsArrObj = new Array();  // все карточки
	let cardActive = []; // активная карточка по которой кликнули
	let cardsActiveArrObj = []; // переменная с карточками для сравнения
	let statusGame // статус игры
	let paramsForModal = {} // параметры для модального окна 
 
	let DELAY_CONFIRMATION_MS = 500 // задержка подтверждения победы
	let DELAY_CARDS_DISPLAY_MS = 1500 // задержка показа карт
	let CARDS_DISPLAY_TIME_MS = 2000 // время показа карт
	let DELAY_HIDDING_CARDS_MS = 500 // время задержки скрытия карт
	let DELAY_START_GAME_MS = 500 // задержка перед началом игры 

	// генерация карточек 
	function cardsGen(object, size) {
		cardsArrObj = []
		cardActive = []
		object.length = Math.floor(size / 2)
		object.forEach((word, index) => {
			cardsArrObj[(index + 1) * 2 - 1 ] = {	id: index + 'id',	name: object[index], status: 'close', open: false}
			cardsArrObj[(index) * 2] = { id: index + 'id', name: object[index], status: 'close',	open: false	}
		})
		cardsArrObj = sortRandom(cardsArrObj);
	}

	// отслеживание кликнутой карточки 
	$: cardActiveOpen = function openCart() {
		let items = cardsActiveArrObj; 
		if(cardActive.length != []) { 
			if (items.length == 0) { editStatusGame('start')
				items[0] = { name: cardActive[0], id: cardActive[1], number: cardActive[2]};
				statusEdit(items[0].number, 'active');
			} else if( items.length == 1 && cardActive[2] != items[0].number) {
				items[1] = { name: cardActive[0],id: cardActive[1], number: cardActive[2]};
				statusEdit(items[1].number, 'active');
				comparisonCards(items);
			} else {}
		}
	} 

	// сравнение выбранных карточек
	function comparisonCards(items) {
		let cardOne = items[0], cardTwo = items[1]
		if (cardOne.id == cardTwo.id) {
			statusEdit(cardOne.number, 'active_open');
			statusEdit(cardTwo.number, 'active_open');
			cardsActiveArrObj = [];
			checkWin()
		} else { 
			statusEdit(cardOne.number, 'close');
			statusEdit(cardTwo.number, 'close');
			cardsActiveArrObj = [];
		}
	}

	// изменение статуса карточки
	function statusEdit(item, action) {
		if (action == "active") {
			cardsArrObj[item - 1].status = 'active';
		} else if (action == "active_open") {
			cardsArrObj[item - 1].status = 'active';
			setTimeout(() => {
				cardsArrObj[item - 1].open = true;
			}, DELAY_CONFIRMATION_MS);
		} else if (action == "close") {
			setTimeout(() => {
				cardsArrObj[item - 1].status = 'close';
			}, DELAY_HIDDING_CARDS_MS);
		}
	}

	// проверка победы
	function checkWin() {
		setTimeout(() => {
			let arr = []
			cardsArrObj.forEach(element => { 
				if (element.open === true )arr.push(element) });
			if (arr.length == cardsArrObj.length) victory() ;
		}, DELAY_CONFIRMATION_MS);
	}

	// оповещение о победе 
	function victory() {
		editStatusGame('end')
		openModal('endGame')
	}

	// рестарт игры 
	function restartGame() {
		if (gameMode != undefined || gameMode != '') {
			cardsGen(sortRandom(images), gameMode);
			setTimeout(() => showСards(), DELAY_CARDS_DISPLAY_MS);
		} else {
			openModal('error')
		}		
	}

	// показать все карточки
	function showСards() {
		editStatusGame('launched')
		for (let i = 0; i < cardsArrObj.length; i++) {
			statusEdit(i + 1, 'active');
			setTimeout(() => {
				editStatusGame('preStart')
				statusEdit(i + 1, 'close');	
			}, CARDS_DISPLAY_TIME_MS );
		}
	}

	// редактирование статуса игры
	function editStatusGame(params) {
		statusGame = params;
	}

	// открытие модального окна
	function openModal(nameModal) {
		if (nameModal == 'endGame') {
			setTimeout(() => {
				paramsForModal = { action: nameModal,	time: get(loopsLS),	gameMods: cardLimit}
			}, DELAY_CONFIRMATION_MS);
		} else if (nameModal == 'gameModeSelection') paramsForModal = { action: nameModal, gameMods: cardLimit }
		else if (nameModal == 'close') paramsForModal = { action: 'close' } 
		else paramsForModal = { action: 'error' }
	}

	function editGameMode()  {
		gameModeLS.set(gameMode)
		restartGame()
		setTimeout(() => {
			openModal('close');
		}, DELAY_START_GAME_MS);
	}

	if (gameMode === 0 || gameMode != undefined) {} else openModal('gameModeSelection')
	$: gameMode && editGameMode()
	$: cardActiveOpen(); // вызыв функции отслеживания активной карты
	showСards(); // показать все карточки
	
</script>

<main>
	
	<div class="cards">
		{#each cardsArrObj as item, i}
			<Card open={item.open} status={item.status} name={item.name} id={item.id} number={i + 1} statusGame={statusGame} bind:cardActive={cardActive} />
		{/each}
	</div>
	<div class="control">
		<div class="controls-head">
			<h1>{name}</h1>
			<ButtonRestart on:message={restartGame} />
		</div>
		{#if gameMode > 0}
		<div class="game-mode">{gameMode} carts</div>
		{/if}
		<Stopwatch statusGame={statusGame} gameMode={gameMode} cardLimit={cardLimit}/>
		<button class="select-mode" on:click={() => openModal('gameModeSelection')}><span>выбрать режим</span><span>⌘</span></button>	
	</div>
</main>

<Modal params={paramsForModal} bind:gameMode={gameMode}/>

<style>
	.select-mode {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 20px 0 0;
		border-top: 1px solid #ff5218;
		color: #ff571f;
		text-transform: uppercase;
		font-weight: 100;
		
	}
	.cards {
		height: 100%;
		padding: 20px;
		margin: 0 auto;
		display: grid;
		grid-template-rows: 100% / 5;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
		gap: 5px;
		flex: 1;
		background: rgb(255, 111, 0)		
	}
	.control {
		width: 200px;
		height: 100%;
		padding: 20px;
		display: flex;
		flex-direction: column;
	}
	.controls-head {
		padding-bottom: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ff571f;
	}
	.game-mode {
		padding-top: 20px;
	}
	main {
		display: flex;
		height: 100vh;
		padding: 0em;
		margin: 0 auto;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>