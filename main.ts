tiles.setCurrentTilemap(tilemap`level1`) //fishing room
tiles.setCurrentTilemap(tilemap`level2`) //selling room
 //setup stuffs for movement
 let guy = sprites.create(img`
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
     6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
 `, SpriteKind.Player)
controller.moveSprite(guy)
scene.cameraFollowSprite(guy)
tiles.setCurrentTilemap(tilemap`level1`) //fishing room
//
let cod = 0
let salmon = 0
let trash = 0
let shark = 0
let cash = 0
//fishing mechanic
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    if (guy.tileKindAt(TileDirection.Right, img`
        8 8 8 8 8 9 8 f f f f f f f 8 8
        9 1 8 9 1 f 8 8 8 8 8 8 8 8 8 8
        f 9 9 f f 8 8 8 8 8 8 8 8 8 8 9
        f 8 1 f 1 9 9 9 9 1 1 8 8 8 1 f
        8 8 8 1 f f f f f f 8 1 9 9 f f
        8 8 8 9 f 8 f 8 8 8 8 8 1 f f 8
        8 8 8 9 1 f 8 8 8 8 1 9 f f 8 f
        8 8 8 8 9 9 8 8 8 1 9 f f 8 f 8
        8 8 8 8 8 8 9 1 1 f f 8 f f 8 8
        8 8 8 8 8 8 8 9 f 1 8 f 8 8 8 8
        8 8 8 8 8 1 9 1 f 1 1 9 9 1 8 8
        8 8 1 8 1 1 f f 8 f f f f f 1 8
        8 1 f 1 9 f f 8 f 8 f 8 8 8 1 8
        1 f 8 8 1 8 8 f 8 f 8 8 8 8 9 1
        f 8 f 8 f 1 1 8 8 8 8 8 1 9 9 f
        8 f 8 8 8 f f 1 9 9 1 1 f f f 8
    `))
    if(Math.percentChance(50)){
        cod++
        game.splash("cod")
    }
    else{if(Math.percentChance(30)){
        salmon++
        game.splash("salmon")
        
    }
    else{if(Math.percentChance(15)){
        trash++
        game.splash("trash")
        
    }
    else{if(Math.percentChance(5)){
        shark++
        game.splash("shark")
        
    }}}}
    else {
        if (guy.tileKindAt(TileDirection.Top, img`
f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b f f f f f f f f b b b b b 
b b b f b b b b b b b b b b b b 
b b b f b b b b b b b b b b b b 
b b b f b b b b b b b b b b b b 
b b b f b b b b b b b b b b b b 
b b b f b f f f f f f b b b b b 
b b b b f b b b b b f f b b b b 
b b b b f b b b b b b b b b b b 
b b b b f b b b b b b b b b b b 
b b b b f f f f f f b b b b b b 
b b b b b f f b b b b b b b b b 
b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f 
`)) {
            game.ask("sell all fish?")
            cash += salmon * 2
            cash += cod * 1
            cash += shark * 10
            info.setScore(cash)
            cod = 0
            salmon = 0
            shark = 0
        }}
})
//


    
//checks if should move to next screen
controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    scene.onOverlapTile(SpriteKind.Player, img`
4 4 4 e e 4 4 4 f e e e e e 4 4 
e e e e e e e e f e e e e e e e 
c c c c c c c c f c c c c c c c 
f f f f f f f f f f f f f f f f 
4 4 4 4 e e e f e e e 4 4 e e 4 
e e e e e e e f e e e e e e e e 
c c c c c c c 2 c c c c c c c c 
f f f f f f f f f f f f f f f f 
4 4 e 4 4 e e e f e e e 4 4 4 4 
e e e e e e e e f e e e e e e e 
c c c c c c c c f c c c c c c c 
f f f f f f f f f f f f f f f f 
4 4 e e e f 4 4 4 4 4 e e e 4 4 
e e e e e f e e e e e e e e e e 
c c c c c f c c c c c c c c c c 
f f f f f f f f f f f f f f f f 
`, function (sprite: Sprite, location: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`level2`)
        pause(10)
        guy.setPosition(20, guy.y)
    }) //selling room
})
