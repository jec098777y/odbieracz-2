def jedzdotylu():
    while True:
            
            robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
            pause(1000)
            robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
            odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
            if odleglosc2 < 10:
                
                robotbit.geek_servo(robotbit.Servos.S1, -25)

                odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
                robotbit.geek_servo(robotbit.Servos.S1, 0)
                if odleglosc2 < 10:
                    robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                    pause(1000)
                    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
                    
                else:

                    robotbit.geek_servo(robotbit.Servos.S1, 25)
                    odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
                    robotbit.geek_servo(robotbit.Servos.S1, 0)
                    if odleglosc2 < 10:
                        robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                        robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
                        pause(1000)
                        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
                        
                        
                    else:
                        
                        break
def on_button_pressed_a():
    jedzdotylu()
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)
        
                

