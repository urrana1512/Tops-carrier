// 2nd type of user define function : function with parameter & without return type
#include<stdio.h>
add(int a, int b, int c){
    printf("Addition : %d", a+b+c);
}

void main(){
    int p,q,r;

    printf("Enter number : ");
    scanf("%d", &p);
    printf("Enter number : ");
    scanf("%d", &q);
    printf("Enter number : ");
    scanf("%d", &r);

    add(p,q,r)
}

// factorial
#include<stdio.h>
factorial(int num){
	int i, fac=1;
	
	for(i=1 ; i<=num ; i++){
        fac = fac * i;
    }
	
    printf("factorial : %d", fac);
}

void main(){
    
    int num;
    printf("Enter number : ");
    scanf("%d", &num);

    factorial(num);
}

// 3rd type of user define function : function without parameter & with return type
// Addition
#include<stdio.h>
add(){
    int a, b;
    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);

    return a+b;
}

void main(){
    printf("addition %d", add());
}