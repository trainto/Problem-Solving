testCases = []
for i in range(int(input())):
    testCases.append(input())

def convert(number):
    if number == 'zero':
        return 0
    elif number == 'one':
        return 1
    elif number == 'two':
        return 2
    elif number == 'three':
        return 3
    elif number == 'four':
        return 4
    elif number == 'five':
        return 5
    elif number == 'six':
        return 6
    elif number == 'seven':
        return 7
    elif number == 'eight':
        return 8
    elif number == 'nine':
        return 9
    elif number == 'ten':
        return 10
    elif number == 0:
        return 'zero'
    elif number == 1:
        return 'one'
    elif number == 2:
        return 'two'
    elif number == 3:
        return 'three'
    elif number == 4:
        return 'four'
    elif number == 5:
        return 'five'
    elif number == 6:
        return 'six'
    elif number == 7:
        return 'seven'
    elif number == 8:
        return 'eight'
    elif number == 9:
        return 'nine'
    elif number == 10:
        return 'ten'
    else:
        return None

def calculate(a, b, operand):
    if operand == '+':
        return a + b
    elif operand == '-':
        return a - b
    elif operand == '*':
        return a * b
    else:
        return None


for equation in testCases:
    a, operand, b, trash, answer = equation.split(' ')
    a = convert(a); b = convert(b)
    if a == None or b == None:
        print("No")
        continue

    realAnswer = calculate(a, b, operand)
    if realAnswer == None:
        print("No")
        continue

    realAnswer = convert(realAnswer)
    if realAnswer == None:
        print("No")
        continue

    if sorted(answer) == sorted(realAnswer):
        print("Yes")
    else:
        print("No")
