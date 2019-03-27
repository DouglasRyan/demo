
- 冒泡排序（O(n*n)）

重复地走访要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。<br>
遍历所有数列，比较相邻的两个数据，按照统一的方向（前大后小/前小后大）排列这两个数据。重复执行，知道没有再需要交换的数据

- 快速排序(O(n log2 n)

    -   快速排序使用分治法（Divide and conquer）策略来把一个序列（list）分为较小和较大的2个子序列，然后递归地排序两个子序列。<br>步骤为：
    1. 挑选基准值：从数列中挑出一个元素，称为“基准”（pivot），
    2. 分割：重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（与基准值相等的数可以到任何一边）。在这个分割结束之后，对基准值的排序就已经完成，
    3. 递归排序子序列：递归地将小于基准值元素的子序列和大于基准值元素的子序列排序。

    - 任意选取一个数据作为基准值（参照的数），然后将所有比它小的数都放到它前面，所有比它大的数都放到它后面<br>
    然后再按此方法对这两部分数据分别进行快速排序。<br>
    重复执行上面过程

- 计数排序O(n + max)

    1. 找出待排序的数组中最大和最小的元素
    2. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项
    3. 对所有的计数累加（从C 中的第一个元素开始，每一项和前一项相加）
    4. 反向填充目标数组：将每个元素i放在新数组的第C[i]项，每放一个元素就将C[i]减去1