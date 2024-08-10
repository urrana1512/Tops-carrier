#include <stdio.h>

struct MyStructure
{
    int a;
    int b;
} s1;

void main()
{
    // struct MyStructure s1;

    printf("Enter number 1 : ");
    scanf("%d", &s1.a);
    printf("Enter number 2 : ");
    scanf("%d", &s1.b);

    printf("a = %d", s1.a);
    printf("\nb = %d", s1.b);
}

// #include<stdio.h>
//
// struct MyStructure
//{
//     int a;
//     int b;
// }s1;
//
//
// void main(){
//     // struct MyStructure s1;
//
//     printf("Enter number 1 : ");
//     scanf("%d", &s1.a);
//     printf("Enter number 2 : ");
//     scanf("%d", &s1.b);
//
//     printf("a = %d", s1.a);
//     printf("\nb = %d", s1.b);
// }

// Using array - ascending order
#include <stdio.h>

struct MyStructure
{
    int a[10];
} s1;

void main()
{
    int i, j, temp;
    // struct MyStructure s1;
    for (i = 0; i < 5; i++)
    {
        printf("Enter number 1 : ");
        scanf("%d", &s1.a[i]);
    }

    for (i = 0; i < 5; i++)
    {
        for (j = i + 1; j < 5; j++)
        {
            if (s1.a[i] > s1.a[j])
            {
                temp = s1.a[i];
                s1.a[i] = s1.a[j];
                s1.a[j] = temp;
            }
        }
        printf("\nAscending Order : ");
        printf("%d", s1.a[i]);
    }
}

// Structure Union - Using array - ascending order
#include <stdio.h>

union MyStructure
{
    int a[10];
    int i, j, temp;
} s1, s2, s3, s4;

void main()
{

    // struct MyStructure s1;
    printf("Enter number 5 Numbers : \n");
    for (s2.i = 0; s2.i < 5; s2.i++)
    {
        printf(" ");
        scanf("%d", &s1.a[s2.i]);
    }

    for (s2.i = 0; s2.i < 5; s2.i++)
    {
        for (s3.j = s2.i + 1; s3.j < 5; s3.j++)
        {
            if (s1.a[s2.i] < s1.a[s3.j])
            {
                s4.temp = s1.a[s2.i];
                s1.a[s2.i] = s1.a[s3.j];
                s1.a[s3.j] = s4.temp;
            }
        }
        printf("\nAscending Order : ");
        printf("%d", s1.a[s2.i]);
    }
}