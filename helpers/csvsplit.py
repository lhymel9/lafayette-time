with open("../lafayetteziplong.csv") as unsplit, open("../by1000.csv",'a') as split:
    split.write("workzip,livezip,population\n")
    for line in unsplit:
            unit = line.split(",")
            if unit[2][:len(unit[2])-1].isdigit():
                unit[2] = int(unit[2][:len(unit[2])-1])
                while unit[2] >= 1000:
                    split.write(unit[0]+","+unit[1]+",1000\n")
                    unit[2] -= 1000
                split.write(unit[0]+","+unit[1]+","+str(unit[2])+"\n")
unsplit.closed
split.closed

