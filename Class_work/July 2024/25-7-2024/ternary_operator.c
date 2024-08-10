// even-odd
#include <stdio.h>
void main()
{
    int a;

    printf("Enyer number : ");
    scanf("%d", &a);

    a % 2 == 0 ? printf("%d is Even.", a) : printf("%d is odd.", a);
}

// leap year
#include <stdio.h>
void main()
{
    int a;

    printf("Enyer year : ");
    scanf("%d", &a);

    a % 4 == 0 ? printf("%d is leap year.", a) : printf("%d is not leap year.", a);
}

// max number
#include <stdio.h>
void main()
{
    int n1, n2, n3;

    n1 > n2 ? n1 > n3 : printf("%d is max", n1) : n2 > n1 ? n2 > n3
                                                          : printf("%d is max", n2) : printf("%d is max", n3);
}