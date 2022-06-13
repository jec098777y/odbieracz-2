def jedzdotylu():
    while True:
            
            robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
            pause(1000)
            robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
            odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
            
            if odleglosc2 < 10:
                
                robotbit.geek_servo(robotbit.Servos.S1, -25)

                odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
                pause(500)
                robotbit.geek_servo(robotbit.Servos.S1, 25)
                odleglosc1 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
                pause(500)
                robotbit.geek_servo(robotbit.Servos.S1, 0)
                if odleglosc1 < 10 and odleglosc2 < 10:
                    break
                if odleglosc1 > odleglosc2:
                    robotbit.motor_run_dual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, 150)
                    pause(500)
                else:
                    robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                    pause(500)

                        
IR_V15.init(Pins.P8)
# uihiuhiuhi
      
def on_button_pressed_a():
    jedzdotylu()
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_press_event_ch_minus():
    jedzdotylu()
    pass
IR_V15.on_press_event(RemoteButton.NEXT, on_press_event_ch_minus)