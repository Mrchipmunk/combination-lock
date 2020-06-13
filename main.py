def on_button_pressed_a():
    global temp, user_key
    temp = "" + user_key + "A"
    user_key = temp
    serial.write_line(user_key)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

temp = ""
user_key = ""
secret = 3791
key = "BBABAA"
user_key = ""

def on_forever():
    pass
basic.forever(on_forever)
