class ProjectileGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene){
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: Projectile,
            frameQuantity: 10,
            active: false,
            visible: false,
            key: 'projectile'
        })

        
    }

    fireProjectile(x, y, slope) {
        const projectile = this.getFirstDead(false);
        if (projectile) {
                projectile.shoot(x, y, slope);
        }
    }
}