// PROGRAM 1 : DYNAMIC CALCULATOR - (START) --------------------->
#include<stdio.h>
void main(){
    int a,b; //DATA MEMBER

    printf("Enter the first value : ");
    // scanf() IS USED FOR GETTING THE VALUE DYNAMICALLY FROM THE USER
    scanf("%d", &a);   //& IS DEFINES THE ADDRESS OF VARIABLE

    printf("Enter the second value : ");
    scanf("%d", &b);

    printf("A : %d", a);
    printf("/tB : %d", b);  // "/t" used for spacing

    printf("/nAddition : %d", a+b);
    printf("/nSubstraction : %d", a-b);
    printf("/nMultiplication : %d", a*b);
    printf("/nDivision : %.2f(float)", a/b);  //TYPE CASTING
}
// PROGRAM 1 : DYNAMIC CALCULATOR - (END) <---------------------



// PROGRAM 2 : DAYS TO YEAR CONVERTER - (START) --------------------->
#include<stdio.h>
void main(){
    int n;
    printf("Enter Days : ");
    scanf("%d", &n);

    printf("/n Years are %.2f(float)", n/365);   // TYPE CASTING
}
// PROGRAM 2 : DAYS TO YEAR CONVERTER - (END) <---------------------



// PROGRAM 3 : YEAR TO DAYS CONVERTER - (START) --------------------->
#include<stdio.h>
void main(){
    int n;
    printf("Enter Years : ");
    scanf("%d", &n);

    printf("/n Days are %d", n*365);   
}
// PROGRAM 3 : YEAR TO DAYS CONVERTER - (END) <---------------------



// PROGRAM 4 : SWAPPING VALUES OF VARIABLES - (START) --------------------->
#include<stdio.h>
void main(){
    int a,b;

    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);

    printf("Before Swapping A value is %d", a);
    printf("Before Swapping B value is %d", b);

    // USING 3RD VARIABLE
    int temp = a;   // temp MEANS Temporary VARIABLE
    int a = b;
    int b = temp;

    // WITHOUT USING 3RD VARIABLE
    // (+ -)METHOD
    int a = a + b;
    int b = a - b;
    int a = a - b;

    // (* /)METHOD
    int a = a * b;
    int b = a / b;
    int a = a / b;

    printf("After Swapping A value is %d", a);
    printf("After Swapping B value is %d", b);    
}
// PROGRAM 4 : SWAPPING VALUES OF VARIABLES - (END) <---------------------



// PROGRAM 5 : IF-ELSE LADDER STATEMENT - (START) --------------------->
#include<stdio.h>
void main(){
    int n;
    printd("Enter Number : ");
    scanf("%d", &n);

    if(n > 0){
        printf("Positive..!");
    }

    else if(n = 0){
        printf("Zero..!");
    }

    else {
        printf("Negative..!");
    }
}
// PROGRAM 5 : IF-ELSE LADDER STATEMENT - (END) <---------------------