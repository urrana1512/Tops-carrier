#include <stdio.h>
void main()
{
    int a[4] = {10, 20, 30, 40}, i;

    // only print one value from array using index value
    printf("%d", a[1]);

    // print all values from array using loop
    for (i = 0; i < 4; i++)
    {
        printf("%d\n", a[i]);
    }
}

// DYNAMIC PROGRAM
#include <stdio.h>
void main()
{
    int i, a[4], sum = 0;

    for (i = 0; i < 4; i++)
    {
        printf("Enter Element : ");
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }
    printf("*************************\n");
    for (i = 0; i < 4; i++)
    {
        printf("Display elements ");
        printf("%d\n", a[i]);
    }
    printf("*************************\n");
    printf("sum of array is : %d", sum);
}

// ascending order
#include <stdio.h>
void main()
{
    int i, j, temp, a[4];

    for (i = 0; i < 4; i++)
    {
        printf("Enter Element : ");
        scanf("%d", &a[i]);
    }
    printf("ASC order");
    for (i = 0; i < 4; i++)
    {
        for (j = i + 1; j < 4; j++)
        {
            if (a[i] > a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        printf("\n%d\n", a[i]);
    }
}

// sum of two array
#include <stdio.h>
void main()
{
    int i, j, a[4], b[4], suma = 0, sumb = 0, sum;

    for (i = 0; i < 4; i++)
    {
        printf("Enter Element : ");
        scanf("%d", &a[i]);
        suma = suma + a[i];
    }
    printf("Display sum of 1st array : %d\n", suma);

    printf("*************************\n");

    for (j = 0; j < 4; j++)
    {
        printf("Enter Element : ");
        scanf("%d", &b[j]);
        sumb = sumb + b[j];
    }
    printf("Display sum of 2nd array : %d\n", sumb);

    printf("*************************\n");

    sum = suma + sumb;
    printf("sum of array is : %d", sum);
}

// multi dimentional array
#include <stdio.h>
void main()
{
    int i, j, a[2][3] = {{1, 2, 3}, {4, 5, 6}};

    for (i = 0; i < 2; i++)
    { // row
        for (j = 0; j < 3; j++)
        { // column
            printf("Enter Elements : ");
            scanf("%d", &a[i][j]);
        }
    }
    printf("\n****************Arrange in Matrix****************\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("Enter Elements [%d %d] : [%d]\n", i, j, a[i][j]);
        }
    }
}