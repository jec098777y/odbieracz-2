let czy_jechać = true
function do_przodu_i_omijaj() {
    let odleglosc2: number;
    let odleglosc1: number;
    while (true) {
        if (czy_jechać == false) {
            break
        }
        
        robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        //  Jedź do przodu
        pause(1000)
        robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        //  Zatrzymaj się
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
//  uihiuhiuhi
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    do_przodu_i_omijaj()
    let czy_jechać = true
    
})
IR_V15.onPressEvent(RemoteButton.NEXT, function on_press_event_ch_minus() {
    let czy_jechać = true
    do_przodu_i_omijaj()
    
})
IR_V15.onPressEvent(RemoteButton.Add, function on_press_event_ch() {
    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    let czy_jechać = false
    
})
