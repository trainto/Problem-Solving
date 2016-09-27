numtc = int(input())

for i in range(numtc):
    rawData = input()
    ck1 = int(rawData[0]) ^ int(rawData[2]) ^ int(rawData[4]) ^ int(rawData[6])
    ck2 = int(rawData[1]) ^ int(rawData[2]) ^ int(rawData[5]) ^ int(rawData[6])
    ck3 = int(rawData[3]) ^ int(rawData[4]) ^ int(rawData[5]) ^ int(rawData[6])
    check = str(ck3) + str(ck2) + str(ck1)
    if check == '000':
        print(rawData[2] + rawData[4] + rawData[5] + rawData[6])
    else:
        error = int(check, 2)
        rawDataList = list(rawData);
        rawDataList[error-1] = str(abs(int(rawData[error-1], 2) - 1))
        print(rawDataList[2] + rawDataList[4] + rawDataList[5] + rawDataList[6])
