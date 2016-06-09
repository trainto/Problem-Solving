days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

def endOfMonth(month):
    if month == 2:
        return 28
    elif month <= 7:
        return 30 if month % 2 == 0 else 31
    else:
        return 31 if month % 2 == 0 else 30

for i in range(int(input())):
    data = input().split(' ')
    data[0] = int(data[0])
    data[1] = int(data[1])
    endDay = endOfMonth(data[0])
    startOfWeek = data[1] - days.index(data[2])
    result = ''
    for i in range(7):
        if startOfWeek <= endDay and startOfWeek > 0:
            result += str(startOfWeek) + ' '
        elif startOfWeek <= 0:
            result += str(startOfWeek + endOfMonth(12 if data[0] == 1 else data[0] - 1)) + ' '
        else:
            result += str(startOfWeek - endDay) + ' '
        startOfWeek += 1
    print(result.strip())
