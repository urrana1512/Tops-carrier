// this is the 1st type of user define function
// 1) function without parameter & without return type
#include<stdio.h>

add()   //FUNCTION DEFINATION
{
    int a, b;

    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);

    printf("Addition : %d\n", a+b);
}
sub()   //FUNCTION DEFINATION
{
    int a, b;

    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);

    printf("Substraction : %d\n", a-b);
}
void main(){

    // int i;
    // for(i=1 ; i<=5 ; i++){
    //     add();
    //     printf("\n");
    // }
    add();
    sub();
}