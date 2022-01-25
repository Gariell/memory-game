var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Gariell/memory-game.git', // Update to point to your repository  
        user: {
            name: 'Gariell', // update to use your name
            email: 'yrunmoung@mail.ru' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)