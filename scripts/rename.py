import os
import os.path

for root, dirs, files in os.walk('.'):
  for f in files:
    fname = os.path.splitext(f)[0]
    os.mkdir(fname)
    os.rename(f, fname + '/index.ts')
