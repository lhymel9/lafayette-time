existing,alls = [], []
with open("entered") as ent, open('lafayetteziplong.csv') as times:
    for line in ent:
        existing.append(line[0:5])
    
    for line in times:
        unit = line.split(",")
        if unit[0] not in alls:
            alls.append(unit[0])
        if unit[1] not in alls:
            alls.append(unit[1])

times.closed
ent.closed

for elem in alls:
    if elem not in existing:
        print(elem)

print(existing)
print(alls)
