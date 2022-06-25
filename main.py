czy_jechać = True

kolory = robotbit.rgb()
def do_przodu_i_omijaj():
    global czy_jechać
    while True:
            if czy_jechać == False:
                break
            robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150) # Jedź do przodu

            kolory.show_rainbow(1, 360)

            pause(1000)
            robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)# Zatrzymaj się
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

makerbit.connect_ir_receiver(DigitalPin.P8, IrProtocol.NEC)
# uihiuhiuhi

def on_button_pressed_a():
    global czy_jechać
    do_przodu_i_omijaj()
    czy_jechać = True
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_press_event_ch_minus():
    global czy_jechać
    czy_jechać = True
    control.in_background(do_przodu_i_omijaj)
    #do_przodu_i_omijaj()
    pass
#IR_V15.on_press_event(RemoteButton.NEXT, on_press_event_ch_minus)
def on_press_event_ch():
    global czy_jechać
    czy_jechać = False
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    
#IR_V15.on_press_event(RemoteButton.ADD, on_press_event_ch)
def on_ir_button_any_pressed():
    pass
def on_ir_datagram():
    
    kod = makerbit.ir_datagram()
    if kod == "0x00FF02FD":
        on_press_event_ch_minus()

        
    elif kod == "0x00FF9867":
        
        on_press_event_ch()
makerbit.on_ir_datagram(on_ir_datagram)
#0x00FF02FD
#0x00FF9867