function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 . . . . . . 
. . . 7 7 7 7 7 7 7 7 . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    projectile2.setPosition(0, Math.randomRange(0, 120))
}
function peaplant () {
    plant = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 7 7 7 7 7 7 7 . . . . . . 
. . 7 7 7 7 7 7 7 7 7 . . . . . 
. . 7 7 7 7 7 7 7 7 7 . . . . . 
. . 7 7 7 7 f 7 7 7 7 7 7 f . . 
. . 7 7 7 7 1 7 7 7 7 7 7 f . . 
. . 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . 7 7 7 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 7 . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . 7 . . . 7 . . . 7 . . . . . 
. . 7 7 . . 7 . . 7 7 . . . . . 
. . 7 7 7 . 7 . 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 7 . . . . . . 
. . . . 7 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 . . . . . . . . 
`, SpriteKind.Player)
    plant.setPosition(78, 101)
    controller.moveSprite(plant, 100, 100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let plant: Sprite = null
let projectile2: Sprite = null
peaplant()
game.onUpdate(function () {
    projectile()
})
