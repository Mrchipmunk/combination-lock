input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    Check_key()
})
function Check_key () {
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.showNumber(secret)
    } else if (user_key.length > key.length) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showString("?")
    }
}
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    Check_key()
})
let temp = ""
let user_key = ""
let key = ""
let secret = 0
secret = 7
key = "ABA"
user_key = ""
