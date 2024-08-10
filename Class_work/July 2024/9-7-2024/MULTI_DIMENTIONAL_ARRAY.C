#include <stdio.h>
void main()
{
    // i : used for ROW
    // j : used for COLUMN
    int a[2][2], b[2][2], i, j;

    // Get value of array from user
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("Enter Number : ");
            scanf("%d", &a[i][j]);
        }
    }

    // Display the array value which is given by user
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("Numbers are [%d][%d] : %d\n", i, j, a[i][j]);
        }
    }

    printf("\n*****************************\n");

    // Get value of array from user
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("Enter Number : ");
            scanf("%d", &b[i][j]);
        }
    }

    // Display the array value which is given by user
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("Numbers are [%d][%d] : %d\n", i, j, b[i][j]);
        }
    }

    printf("\n*****************************\n");

    // This is the Addition of 2 array
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("Sum is [%d][%d] : %d\n", i, j, a[i][j] + b[i][j]);
        }
    }
}