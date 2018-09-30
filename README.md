Moved to: https://gitlab.com/oliverjessner/buchstabieralphabet

# buchstabieralphabet
Because I have to spell my company name all the time.
This things is also called buchstabiertafel in some parts of germany.

## Install

```bash
npm install -g buchstabieralphabet
```

## Usage
Just use flag `i` for input.

```bash
buchstabieralphabet -i "Ganescha Labs"
```

## Output
It defaults to the austrian version of the 'buchstabieralphabet'

```
G -> Gustav
A -> Anton
N -> Nordpol
E -> Emil
S -> Siegfried
C -> Cäsar
H -> Heinrich
A -> Anton
  -> Leerzeichen
L -> Ludwig
A -> Anton
B -> Berta
S -> Siegfried
```

 use flag `t` for other versions, currently supporting
 
 - aut, for the austrian buchstabieralphabet
 - ger, for the german buchstabieralphabet
 - ch, for the swiss buchstabieralphabet

Example to get the german buchstabieralphabet

```bash
buchstabieralphabet -t "ger" -i "Ganescha Labs"
```
