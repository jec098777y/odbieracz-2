let czy_jechać = true
let kolory = robotbit.rgb()
function do_przodu_i_omijaj() {
    let odleglosc2: number;
    let odleglosc1: number;
    
    while (true) {
        if (czy_jechać == false) {
            break
        }
        
        robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        //  Jedź do przodu
        kolory.showRainbow(1, 360)
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

makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.NEC)
//  uihiuhiuhi
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    do_przodu_i_omijaj()
    czy_jechać = true
    
})
function on_press_event_ch_minus() {
    
    czy_jechać = true
    control.inBackground(do_przodu_i_omijaj)
    // do_przodu_i_omijaj()
    
}

// IR_V15.on_press_event(RemoteButton.NEXT, on_press_event_ch_minus)
function on_press_event_ch() {
    
    czy_jechać = false
    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
}

// IR_V15.on_press_event(RemoteButton.ADD, on_press_event_ch)
function on_ir_button_any_pressed() {
    
}

makerbit.onIrDatagram(function on_ir_datagram() {
    let kod = makerbit.irDatagram()
    if (kod == "0x00FF02FD") {
        on_press_event_ch_minus()
    } else if (kod == "0x00FF9867") {
        on_press_event_ch()
    }
    
})
