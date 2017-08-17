# Bubble Sort

## Overview
Bubble Sort is a **stable**, **in-place** sorting algorithm.  Bubble sort performs poorly compared to other sorting algorithms.  It is primarily used for its simplicity as an academic example of a sorting algorithm.

## Breakdown
Bubble sort works by comparing each adjacent pair in sequence.  If they are not in the correct order, they are swapped. After each iteration,  we no longer need to move the last item, as it has *"bubbled"* to its correct position.  

![Bubble Sort Illustration](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif "Bubble Sort Illustration")

If the loop does not swap any items, we can break, as the array has been sorted.

## Complexity
n: | length of items to sort
-----:|---
Worst Case | O(n^2)
Average Case | Θ(n^2)
Best Case | Ω(n)
Space Complexity | O(1)

### Sources
<https://en.wikipedia.org/wiki/Bubble_sort>
<http://www.geeksforgeeks.org/bubble-sort/>


