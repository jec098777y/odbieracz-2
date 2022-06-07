function jedzdotylu() {
    let odleglosc2: number;
    while (true) {
        robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        pause(1000)
        robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
        if (odleglosc2 < 10) {
            robotbit.GeekServo(robotbit.Servos.S1, -25)
            odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
            robotbit.GeekServo(robotbit.Servos.S1, 0)
            if (odleglosc2 < 10) {
                robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                pause(1000)
                robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
            } else {
                robotbit.GeekServo(robotbit.Servos.S1, 25)
                odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
                robotbit.GeekServo(robotbit.Servos.S1, 0)
                if (odleglosc2 < 10) {
                    robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                    robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                    pause(1000)
                    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
                } else {
                    break
                }
                
            }
            
        }
        
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    jedzdotylu()
    
})
