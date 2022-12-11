namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const secret = SpriteKind.create()
    export const beetle1 = SpriteKind.create()
    export const beetle2 = SpriteKind.create()
    export const beetle3 = SpriteKind.create()
    export const ShellKooopa = SpriteKind.create()
    export const koopa = SpriteKind.create()
    export const fakesecret = SpriteKind.create()
    export const secret2 = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const poisonfuck = SpriteKind.create()
    export const spiny1 = SpriteKind.create()
    export const spiny2 = SpriteKind.create()
    export const points1 = SpriteKind.create()
    export const points2 = SpriteKind.create()
    export const points3 = SpriteKind.create()
    export const points4 = SpriteKind.create()
    export const fakedoor1 = SpriteKind.create()
    export const bowserdoor = SpriteKind.create()
    export const finaldoor = SpriteKind.create()
    export const fakedoor2 = SpriteKind.create()
    export const Bowser = SpriteKind.create()
    export const bpoint1 = SpriteKind.create()
    export const bpoint2 = SpriteKind.create()
    export const bpoint3 = SpriteKind.create()
    export const bpoint4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.spiny1, SpriteKind.points2, function (sprite, otherSprite) {
    spiny1thing.follow(point1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.beetle2, function (sprite, otherSprite) {
    Beetles2.destroy()
    info.changeScoreBy(1.5)
    info.player2.changeScoreBy(1.5)
    Fireball.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ShellKooopa, function (sprite, otherSprite) {
    ShellVelocity.destroy()
    info.changeScoreBy(1)
    info.player2.changeScoreBy(1)
    Fireball.destroy()
})
sprites.onOverlap(SpriteKind.spiny1, SpriteKind.points1, function (sprite, otherSprite) {
    spiny1thing.follow(point2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bpoint4, function (sprite, otherSprite) {
    info.player4.changeLifeBy(1)
    pause(5000)
})
sprites.onOverlap(SpriteKind.spiny2, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(1000)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bpoint3, function (sprite, otherSprite) {
    info.player4.changeLifeBy(1)
    pause(5000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(200)
    Mario.setImage(assets.image`Mario Right`)
    Fireball = sprites.createProjectileFromSprite(assets.image`fire`, Mario, 50, 0)
    music.knock.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bowserdoor, function (sprite, otherSprite) {
    game.showLongText("This door will take you straight to bowser. Prepare yourself.", DialogLayout.Center)
    game.showLongText("He will take a while to kill, and he will charge right at you after some time", DialogLayout.Center)
    game.showLongText("Be prepared to get hit. Do your best!", DialogLayout.Center)
    info.changeLifeBy(1)
    Bowser = sprites.create(assets.image`Bowser`, SpriteKind.Bowser)
    Bowser.setPosition(10, 5)
    sprites.destroyAllSpritesOfKind(SpriteKind.fakedoor1)
    sprites.destroyAllSpritesOfKind(SpriteKind.bowserdoor)
    sprites.destroyAllSpritesOfKind(SpriteKind.finaldoor)
    sprites.destroyAllSpritesOfKind(SpriteKind.fakedoor2)
    Bowserpoint1 = sprites.create(assets.image`Bowserpoint`, SpriteKind.bpoint1)
    bowserpoint2 = sprites.create(assets.image`Bowserpoint`, SpriteKind.bpoint2)
    bowserpoint3 = sprites.create(assets.image`Bowserpoint`, SpriteKind.bpoint3)
    bowserpoint4 = sprites.create(assets.image`Bowserpoint`, SpriteKind.bpoint4)
    tiles.placeOnTile(Bowserpoint1, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(bowserpoint3, tiles.getTileLocation(8, 6))
    tiles.placeOnTile(bowserpoint2, tiles.getTileLocation(8, 1))
    tiles.placeOnTile(bowserpoint4, tiles.getTileLocation(1, 6))
    tiles.setCurrentTilemap(tilemap`evenmorenothing`)
    Bowser.follow(Bowserpoint1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(200)
    Mario.setImage(assets.image`Mario Left`)
    Fireball = sprites.createProjectileFromSprite(assets.image`fire`, Mario, -50, 0)
    music.knock.play()
})
sprites.onOverlap(SpriteKind.spiny1, SpriteKind.poisonfuck, function (sprite, otherSprite) {
    info.player3.changeScoreBy(10)
    info.changeLifeBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.poisonfuck)
})
sprites.onOverlap(SpriteKind.beetle3, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(500)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShellKooopa, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ShellKooopa)
    info.changeScoreBy(3)
    info.player2.changeScoreBy(3)
    info.changeLifeBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spiny2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.player3.changeScoreBy(1)
    Fireball.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.secret2, function (sprite, otherSprite) {
    scene.setBackgroundImage(assets.image`Doors`)
    tiles.setCurrentTilemap(tilemap`truedoors`)
    info.player3.setLife(5)
    Mario.setPosition(105, 54)
})
sprites.onOverlap(SpriteKind.spiny2, SpriteKind.points3, function (sprite, otherSprite) {
    spiny2thing.follow(point4)
})
sprites.onOverlap(SpriteKind.Bowser, SpriteKind.bpoint1, function (sprite, otherSprite) {
    Bowser.follow(bowserpoint2)
})
info.onCountdownEnd(function () {
	
})
sprites.onOverlap(SpriteKind.spiny2, SpriteKind.points4, function (sprite, otherSprite) {
    spiny2thing.follow(point3)
})
info.player2.onScore(25, function () {
    Mario.sayText("Yahoo!!!", 1000, false)
    sprites.destroyAllSpritesOfKind(SpriteKind.secret)
    sprites.destroyAllSpritesOfKind(SpriteKind.fakesecret)
    scene.setBackgroundImage(assets.image`3-3`)
    tiles.setCurrentTilemap(tilemap`4`)
    Mario.setPosition(76, 56)
    spiny1thing = sprites.create(assets.image`Spiny Left`, SpriteKind.spiny1)
    spiny2thing = sprites.create(assets.image`Spiny Right`, SpriteKind.spiny2)
    point1 = sprites.create(assets.image`point`, SpriteKind.points1)
    point2 = sprites.create(assets.image`point`, SpriteKind.points2)
    point3 = sprites.create(assets.image`point`, SpriteKind.points3)
    point4 = sprites.create(assets.image`point`, SpriteKind.points4)
    tiles.placeOnTile(point1, tiles.getTileLocation(3, 2))
    tiles.placeOnTile(point2, tiles.getTileLocation(7, 2))
    tiles.placeOnTile(point3, tiles.getTileLocation(1, 6))
    tiles.placeOnTile(point4, tiles.getTileLocation(9, 6))
    spiny1thing.setPosition(71, 26)
    spiny2thing.setPosition(74, 82)
    spiny1thing.follow(point1)
    spiny2thing.follow(point4)
    spiny1thing.setFlag(SpriteFlag.GhostThroughWalls, true)
    spiny2thing.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bpoint1, function (sprite, otherSprite) {
    info.player4.changeLifeBy(1)
    pause(5000)
})
info.onScore(10, function () {
    Mario.sayText("Wahoo!! Level 2!!", 2000, false)
    tiles.setCurrentTilemap(tilemap`2`)
    mySprite = sprites.create(assets.image`P Switch`, SpriteKind.fakesecret)
    mySprite.setPosition(8, 114)
    scene.setBackgroundImage(assets.image`2-2`)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(1000)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bpoint2, function (sprite, otherSprite) {
    info.player4.changeLifeBy(1)
    pause(5000)
})
info.player4.onScore(3000, function () {
    let ghost: Sprite = null
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bowser)
    sprites.destroyAllSpritesOfKind(SpriteKind.bpoint1)
    sprites.destroyAllSpritesOfKind(SpriteKind.bpoint2)
    sprites.destroyAllSpritesOfKind(SpriteKind.bpoint3)
    sprites.destroyAllSpritesOfKind(SpriteKind.bpoint4)
    pause(5000)
    scene.setBackgroundImage(assets.image`Fake End`)
    game.showLongText("You won!", DialogLayout.Top)
    game.showLongText("Please turn off the console.", DialogLayout.Bottom)
    pause(5000)
    pause(5000)
    ghost.sayText("help us")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.beetle3, function (sprite, otherSprite) {
    Koopa.destroy()
    Fireball.destroy()
    music.smallCrash.play()
    ShellVelocity = sprites.create(assets.image`KoopaShell`, SpriteKind.ShellKooopa)
})
info.player3.onScore(40, function () {
    tiles.setCurrentTilemap(tilemap`3secret`)
    game.showLongText("Touch the goal to proceed to the final level!", DialogLayout.Full)
    Key = sprites.create(assets.image`Key`, SpriteKind.secret2)
    Finish = sprites.create(assets.image`invisigoal`, SpriteKind.goal)
    tiles.placeOnRandomTile(Finish, assets.tile`Goal`)
    tiles.placeOnRandomTile(Key, assets.tile`goalkey`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(1000)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.spiny2, SpriteKind.poisonfuck, function (sprite, otherSprite) {
    info.player3.changeScoreBy(10)
    info.changeLifeBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.poisonfuck)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.beetle1, function (sprite, otherSprite) {
    beetles1.destroy()
    info.changeScoreBy(1.5)
    info.player2.changeScoreBy(1.5)
    Fireball.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.beetle2, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(500)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    Goober.destroy()
    info.changeScoreBy(1)
    Fireball.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fakedoor1, function (sprite, otherSprite) {
    game.showLongText("You don't have the right key for this door.", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.fakedoor1)
    deaddoor = sprites.create(assets.image`SleepDoor`, SpriteKind.fakedoor2)
    tiles.placeOnRandomTile(deaddoor, assets.tile`Opened Box`)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeLifeBy(1)
    Mario.setImage(assets.image`Mario Error`)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(500)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.fakesecret)
    sprites.destroyAllSpritesOfKind(SpriteKind.secret)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Bowser, SpriteKind.bpoint3, function (sprite, otherSprite) {
    Bowser.follow(bowserpoint4)
})
sprites.onOverlap(SpriteKind.Bowser, SpriteKind.bpoint4, function (sprite, otherSprite) {
    Bowser.follow(Mario)
})
sprites.onOverlap(SpriteKind.Bowser, SpriteKind.Player, function (sprite, otherSprite) {
    Bowser.follow(Bowserpoint1)
    info.changeScoreBy(-10)
    info.changeLifeBy(-1)
    info.player4.changeLifeBy(-1)
    info.player4.changeScoreBy(-10)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(5000)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spiny1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.player3.changeScoreBy(1)
    Fireball.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    scene.setBackgroundImage(assets.image`Doors`)
    tiles.setCurrentTilemap(tilemap`nothing`)
    Mario.setPosition(105, 54)
})
sprites.onOverlap(SpriteKind.spiny1, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(1000)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Bowser, SpriteKind.bpoint2, function (sprite, otherSprite) {
    Bowser.follow(bowserpoint3)
})
sprites.onOverlap(SpriteKind.beetle1, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(500)
    Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.secret, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.secret)
    sprites.destroyAllSpritesOfKind(SpriteKind.fakesecret)
    Mario.setStayInScreen(false)
    scene.cameraFollowSprite(Mario)
    Mario.sayText("Don't stop now. You have to save us.", 2000, false)
    pause(2000)
    scene.setBackgroundImage(assets.image`3-3`)
    tiles.setCurrentTilemap(tilemap`4`)
    Mario.setPosition(92, 51)
    Mario.sayText("There's a key underneath and outside the map. We need it.", 3000, false)
    pause(3000)
    game.showLongText("Stop helping them and just play the game. You're going to break it.", DialogLayout.Bottom)
    spiny1thing = sprites.create(assets.image`Spiny Left`, SpriteKind.spiny1)
    spiny2thing = sprites.create(assets.image`Spiny Right`, SpriteKind.spiny2)
    point1 = sprites.create(assets.image`point`, SpriteKind.points1)
    point2 = sprites.create(assets.image`point`, SpriteKind.points2)
    point3 = sprites.create(assets.image`point`, SpriteKind.points3)
    point4 = sprites.create(assets.image`point`, SpriteKind.points4)
    tiles.placeOnTile(point1, tiles.getTileLocation(3, 2))
    tiles.placeOnTile(point2, tiles.getTileLocation(7, 2))
    tiles.placeOnTile(point3, tiles.getTileLocation(1, 6))
    tiles.placeOnTile(point4, tiles.getTileLocation(9, 6))
    spiny1thing.setPosition(71, 26)
    spiny2thing.setPosition(74, 82)
    spiny1thing.follow(point1)
    spiny2thing.follow(point4)
    spiny1thing.setFlag(SpriteFlag.GhostThroughWalls, true)
    spiny2thing.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.poisonfuck, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroyAllSpritesOfKind(SpriteKind.poisonfuck)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bowser, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    info.player4.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fakedoor2, function (sprite, otherSprite) {
    game.showLongText("Leave it alone.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Goober_2.destroy()
    info.changeScoreBy(1)
    Fireball.destroy()
    music.smallCrash.play()
})
let poisonshroomy: Sprite = null
let Getout: Sprite = null
let BowserDoorThing: Sprite = null
let Sleepdoor: Sprite = null
let PSwitchReal: Sprite = null
let Goober_2: Sprite = null
let deaddoor: Sprite = null
let Goober: Sprite = null
let beetles1: Sprite = null
let Finish: Sprite = null
let Key: Sprite = null
let Koopa: Sprite = null
let mySprite: Sprite = null
let point3: Sprite = null
let point4: Sprite = null
let spiny2thing: Sprite = null
let bowserpoint4: Sprite = null
let bowserpoint3: Sprite = null
let bowserpoint2: Sprite = null
let Bowserpoint1: Sprite = null
let Bowser: Sprite = null
let point2: Sprite = null
let ShellVelocity: Sprite = null
let Fireball: Sprite = null
let Beetles2: Sprite = null
let point1: Sprite = null
let spiny1thing: Sprite = null
let Mario: Sprite = null
music.magicWand.play()
game.showLongText("Mario but he has a gun :)", DialogLayout.Full)
music.jumpUp.play()
game.showLongText("Press A/Z to shoot left", DialogLayout.Bottom)
music.jumpDown.play()
game.showLongText("Press B/X to shoot right", DialogLayout.Bottom)
game.showLongText("Don't worry about multiplayer. It's just the scoring system for different levels. The red score is your overall score!", DialogLayout.Full)
music.spooky.play()
game.showLongText("DO NOT search for ANY secrets. There are none for you. I hate that you made say this.", DialogLayout.Bottom)
Mario = sprites.create(assets.image`Mario Right`, SpriteKind.Player)
controller.moveSprite(Mario, 100, 100)
Mario.setStayInScreen(true)
scene.setBackgroundImage(assets.image`1-1`)
tiles.setCurrentTilemap(tilemap`level1stuff`)
info.setLife(3)
info.player2.setLife(1)
info.player3.setLife(1)
info.player4.setLife(2)
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 15), sprites.builtin.forestTiles0)) {
        for (let index = 0; index < 25; index++) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
            sprites.destroyAllSpritesOfKind(SpriteKind.beetle1)
            sprites.destroyAllSpritesOfKind(SpriteKind.beetle2)
            sprites.destroyAllSpritesOfKind(SpriteKind.beetle3)
            sprites.destroyAllSpritesOfKind(SpriteKind.poisonfuck)
            pause(500)
        }
    }
})
forever(function () {
    if (info.player4.life() == 5) {
        game.showLongText("But it was too late to save her.", DialogLayout.Top)
        info.player4.setLife(0)
        for (let index = 0; index < 10000000; index++) {
            pause(5000)
        }
    }
})
forever(function () {
    if (info.player2.life() == 5) {
        info.changeLifeBy(1000)
        info.setScore(11)
        Mario.setFlag(SpriteFlag.GhostThroughSprites, true)
        game.showLongText("I thought I told you to not look for secrets.", DialogLayout.Bottom)
        game.showLongText("Now all you've done is broken the system. Restart you console and STOP. SEARCHING.", DialogLayout.Bottom)
        game.showLongText("", DialogLayout.Bottom)
        game.showLongText("I told you to restart your console. There is nothing for you here.", DialogLayout.Bottom)
        game.showLongText("LEAVE.", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.spiny1)
        sprites.destroyAllSpritesOfKind(SpriteKind.spiny2)
        sprites.destroyAllSpritesOfKind(SpriteKind.points1)
        sprites.destroyAllSpritesOfKind(SpriteKind.points2)
        sprites.destroyAllSpritesOfKind(SpriteKind.points3)
        sprites.destroyAllSpritesOfKind(SpriteKind.points4)
        sprites.destroyAllSpritesOfKind(SpriteKind.poisonfuck)
        sprites.destroyAllSpritesOfKind(SpriteKind.secret2)
        sprites.destroyAllSpritesOfKind(SpriteKind.goal)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.secret)
        sprites.destroyAllSpritesOfKind(SpriteKind.fakesecret)
        sprites.destroyAllSpritesOfKind(SpriteKind.beetle1)
        sprites.destroyAllSpritesOfKind(SpriteKind.beetle2)
        Mario.setPosition(6, 22)
        Mario.setFlag(SpriteFlag.GhostThroughSprites, false)
        info.setLife(4)
        scene.setBackgroundImage(assets.image`2-2`)
        tiles.setCurrentTilemap(tilemap`0`)
        PSwitchReal = sprites.create(assets.image`P Switch`, SpriteKind.secret)
        PSwitchReal.setPosition(5, 105)
        for (let index = 0; index < 10000; index++) {
            pause(5000)
            pause(5000)
            pause(5000)
        }
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 15), assets.tile`Box`)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.points1)
        sprites.destroyAllSpritesOfKind(SpriteKind.points2)
        sprites.destroyAllSpritesOfKind(SpriteKind.points3)
        sprites.destroyAllSpritesOfKind(SpriteKind.points4)
        sprites.destroyAllSpritesOfKind(SpriteKind.spiny2)
        sprites.destroyAllSpritesOfKind(SpriteKind.spiny1)
        scene.centerCameraAt(0, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.goal)
        sprites.destroyAllSpritesOfKind(SpriteKind.secret2)
        Sleepdoor = sprites.create(assets.image`FakeTrueDoor`, SpriteKind.fakedoor1)
        BowserDoorThing = sprites.create(assets.image`Door1`, SpriteKind.bowserdoor)
        Getout = sprites.create(assets.image`TrueDoor`, SpriteKind.finaldoor)
        tiles.placeOnRandomTile(Getout, assets.tile`OpenBoxGround`)
        tiles.placeOnRandomTile(BowserDoorThing, assets.tile`Opened Box0`)
        tiles.placeOnRandomTile(Sleepdoor, assets.tile`Opened Box`)
        for (let index = 0; index < 1000000000; index++) {
            pause(69000)
        }
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 0), assets.tile`OpenBoxGround`)) {
        pause(1000)
        beetles1 = sprites.create(assets.image`Beetle Right`, SpriteKind.beetle1)
        beetles1.follow(Mario)
        beetles1.setPosition(5, 19)
        pause(1000)
        Beetles2 = sprites.create(assets.image`Beetle Left`, SpriteKind.beetle2)
        Beetles2.follow(Mario)
        Beetles2.setPosition(148, 35)
        pause(1000)
        Koopa = sprites.create(assets.image`Koopa`, SpriteKind.beetle3)
        Koopa.follow(Mario)
        Koopa.setPosition(35, 111)
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), assets.tile`Box`)) {
        Goober_2 = sprites.create(assets.image`Gooba Left`, SpriteKind.Enemy)
        Goober_2.setPosition(151, 105)
        Goober_2.follow(Mario)
        pause(1000)
        Goober = sprites.create(assets.image`Gooba right`, SpriteKind.Enemy2)
        Goober.setPosition(5, 73)
        Goober.follow(Mario)
        pause(1000)
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 15), sprites.castle.tileGrass2)) {
        pause(2000)
        pause(2000)
        pause(2000)
        poisonshroomy = sprites.create(assets.image`poisonshroom`, SpriteKind.poisonfuck)
        poisonshroomy.setPosition(41, 55)
        poisonshroomy.follow(Mario)
    }
})
