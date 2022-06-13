function jedzdotylu() {
    let odleglosc2: number;
    let odleglosc1: number;
    while (true) {
        robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        pause(1000)
        robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
        if (odleglosc2 < 10) {
            robotbit.GeekServo(robotbit.Servos.S1, -25)
            odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
            pause(500)
            robotbit.GeekServo(robotbit.Servos.S1, 25)
            odleglosc1 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
            pause(500)
            robotbit.GeekServo(robotbit.Servos.S1, 0)
            if (odleglosc1 < 10 && odleglosc2 < 10) {
                break
            }
            
            if (odleglosc1 > odleglosc2) {
                robotbit.MotorRunDual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, 150)
                pause(500)
            } else {
                robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                pause(500)
            }
            
        }
        
    }
}

IR_V15.init(Pins.P8)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    jedzdotylu()
    
})
IR_V15.onPressEvent(RemoteButton.NEXT, function on_press_event_ch_minus() {
    jedzdotylu()
    
})
