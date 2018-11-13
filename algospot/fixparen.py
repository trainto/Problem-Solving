def correctParen(pair, rawPrior):
    if pair == '()' or pair == '{}' or pair == '[]' or pair == '<>':
        return pair
    else:
        prior = []
        for i in range(len(rawPrior)):
            prior.append(rawPrior[i])
            if rawPrior[i] == '(':
                prior.append(')')
            elif rawPrior[i] == '{':
                prior.append('}')
            elif rawPrior[i] == '[':
                prior.append(']')
            elif rawPrior[i] == '<':
                prior.append('>')
        if (prior.index(pair[0]) < prior.index(pair[1])):
            pair = pair[0] + prior[prior.index(pair[0]) + 1]
        else:
            pair = prior[prior.index(pair[1]) - 1] + pair[1]
        return pair

for i in range(int(input())):
    text, prior = input().split(' ')
    text = list(text)
    stack = []
    stackIdx = []
    for j in range(len(text)):
        if text[j] == ')' or text[j] == '}' or text[j] == ']' or text[j] == '>':
            corrected = correctParen(stack.pop() + text[j], prior)
            text[stackIdx.pop()] = corrected[0]
            text[j] = corrected[1]
        else:
            stack.append(text[j])
            stackIdx.append(j)
    print(''.join(text))
