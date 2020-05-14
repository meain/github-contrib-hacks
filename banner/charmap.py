import os
import glob

height = 7
width = 7
symbol_height = 7
symbol_width = 7

rep = {}
values = []
counter = 0
# height_skip = ((height - symbol_height) * width) / 2
# width_skip = symbol_height * (width - symbol_width)
# # counter += symbol_height * (width - symbol_width)

counter += height * int((width - symbol_width) / 2)
print("counter:", counter)
for filename in glob.glob("symbols/*"):
    with open(filename) as f:
        data = f.read()
        parsed = filter(lambda x: len(x) > 0, data.split("\n"))
        parsed = [list(x) for x in parsed]
        parsed = [*zip(*parsed)]
        print("parsed:", parsed)
        for p in parsed:
            counter += int((height - symbol_height) / 2)
            print("counter:", counter)
            for i in p:
                counter += 1
                if i == "1":
                    values.append(counter)
            counter += int((height - symbol_height) / 2)
        rep[os.path.basename(filename)] = values
        values = []

print(rep)
