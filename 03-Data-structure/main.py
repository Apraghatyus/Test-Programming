#Data structure
#list
"""List is a collection of items that are ordered and changeable. It allows duplicate members. Lists are defined by having values between square brackets []."""
My_list: list = [
    "D4vd", 
    "Post Malone", 
    "The Weeknd", 
    "Travis Scott", 
    "Kanye West"
    ]
My_list.append("Drake") # Create
My_list.insert(0, "J. Cole") # insert
My_list[2] = "Kendrick Lamar" # update
My_list.remove("Travis Scott") # delete
My_list.sort() # sort the list
"""List can be accessed by index, and they can also be sliced to create new lists. Lists are mutable, meaning that their contents can be changed after they are created."""

#Tuple
"""Tuple is a collection of items that are ordered and unchangeable. It allows duplicate members. Tuples are defined by having values between parentheses ()."""
My_tuple: tuple = (
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Monday"
    )
"""Tuples can be accessed by index, and they can also be sliced to create new tuples. Tuples are immutable, meaning that their contents cannot be changed after they are created."""
My_tuple.count("Monday")
My_tuple.index("Tuesday")


#set
"""Set is a collection of items that are unordered and unindexed. It does not allow duplicate members. Sets are defined by having values between curly braces {}."""
My_set: set = {
    "Apple",
    "Banana",
    "Cherry",
    "Apple"
    }
"""Sets are unordered, meaning that the items do not have a defined order. Sets are mutable, meaning that their contents can be changed after they are created. However, since sets do not allow duplicate members, any duplicate items will be automatically removed."""
My_set.add("Orange") # Create
My_set.remove("Banana") # delete
"""The best way to update a data, is to remove the old data and add the new data. Since sets do not allow duplicate members, we can simply add the new data without worrying about duplicates."""

#Dictionary
"""Dictionary is a collection of items that are unordered, changeable and indexed. It does not allow duplicate members. Dictionaries are defined by having values between curly braces {}, and they have keys and values."""
My_dict: dict = { 
    "song": "American Idiot", 
    "artist": "Green", 
    "album": "American Idiot" 
    }
My_dict["year"] = 2004 # Create
My_dict["artist"] = "Green Day" # update
del My_dict["album"] # delete
"""Dictionaries are unordered, meaning that the items do not have a defined order. Dictionaries are mutable, meaning that their contents can be changed after they are created. However, since dictionaries do not allow duplicate members, any duplicate keys will be automatically removed."""
