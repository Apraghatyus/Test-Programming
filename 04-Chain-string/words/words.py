# ============================================================
#  EXTRA – WORD ANALYSIS
# ============================================================

# ── Helper: normalize a word (lowercase, only letters) ───────
def normalize(word: str) -> str:
    return "".join(c for c in word.lower() if c.isalpha())

# ── Palindrome ───────────────────────────────────────────────
# A word that reads the same forwards and backwards.
def is_palindrome(word: str) -> bool:
    clean = normalize(word)
    return clean == clean[::-1]   # slicing trick to reverse a string

# ── Anagram ──────────────────────────────────────────────────
# Two words that contain the exact same letters (regardless of order).
def is_anagram(word1: str, word2: str) -> bool:
    return sorted(normalize(word1)) == sorted(normalize(word2))

# ── Isogram ──────────────────────────────────────────────────
# A word where no letter appears more than once.
def is_isogram(word: str) -> bool:
    clean = normalize(word)
    return len(set(clean)) == len(clean)

# ── Analysis runner ──────────────────────────────────────────
def analyze_words(word_a: str, word_b: str) -> None:
    print("\n============================================================")
    print(f' WORD ANALYSIS: "{word_a}" vs "{word_b}"')
    print("============================================================")

    print(f"\n ${word_a} and ${word_b} are Palindrome?")
    print(f'    "{word_a}" is a palindrome: {is_palindrome(word_a)}')
    print(f'    "{word_b}" is a palindrome: {is_palindrome(word_b)}')

    print("\n ${word_a} and ${word_b} are Anagram?")
    print(f'    "{word_a}" and "{word_b}" are anagrams: {is_anagram(word_a, word_b)}')

    print("\n ${word_a} and ${word_b} are Isogram?")
    print(f'    "{word_a}" is an isogram: {is_isogram(word_a)}')
    print(f'    "{word_b}" is an isogram: {is_isogram(word_b)}')

# ── Test cases ───────────────────────────────────────────────
word1:str = input('write the first word: ')
word2:str = input('wtire the second word: ')
analyze_words(word1,word2)
