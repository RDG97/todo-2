when user enters something for the first time we will send what they put to an array
    stuff = {
        [
        todo: 'make a pizza',
        id: 1,
        status: 'notdone' (only 2 options for status: done or notdone)
        ],
        [
        todo: 'die',
        id: 2,
        status: 'done'
        ]
    }
    we will have 2 components that map one of the two status's, a board for notdone and a board for done
    defaultly desplayed will be the notdone board, along with an input field to submit things to do