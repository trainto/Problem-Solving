testCases = []
for i in range(int(input())):
    testCases.append(input())

def convert(raw):
    value, unit = raw.split(' ')
    if unit == 'kg':
        return float(value) * 2.2046, 'lb'
    elif unit == 'l':
        return float(value) * 0.2642, 'g'
    elif unit == 'lb':
        return float(value) * 0.4536, 'kg'
    else:
        return float(value) * 3.7854, 'l'

for i in range(len(testCases)):
    value, unit = convert(testCases[i])
    print(str(i + 1) + ' ' + "%0.4f" % value + ' ' + unit)
