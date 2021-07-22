class ProjectileGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene){
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: Projectile,
            frameQuantity: 350,
            active: false,
            visible: false,
            key: 'projectile'
        })

        
    }

    fireProjectile(x, y, slope, horizontal) {
        const projectile = this.getFirstDead(false);
        if (projectile) {
                projectile.shoot(x, y, slope, horizontal);
        }
    }
}