#include <iostream>
using namespace std;

char sname[10];
int sno, php, java, python, total;
float per;

class Details
{
public:
    student()
    {
        // char sname[10];
        // int sno;

        cout << "Enter Student Name : ";
        cin >> sname;
        cout << "Enter Student Roll no. : ";
        cin >> sno;
    }
};

class Marks : public Details
{
public:
    subject()
    {
        // int php, java, python;
        cout << "Enter the Marks." << endl;

        cout << "PHP : ";
        cin >> php;

        // if (php <= 0 && php >= 100)
        // {
        //     cout << "Error : Please Enter marks Below 100.";
        // }

        cout << "JAVA : ";
        cin >> java;

        // if (java <= 0 && java >= 100)
        // {
        //     cout << "Error : Please Enter marks Below 100.";
        // }

        cout << "PYTHON : ";
        cin >> python;

        // if (python <= 0 && python >= 100)
        // {
        //     cout << "Error : Please Enter marks Below 100.";
        // }
    }
};

class Result : public Marks
{
public:
    percentage()
    {
        // int total = PHP + JAVA + PYTHON;
        // float percentage;

        total = php + java + python;

        if (total > 300 || total < 0)
        {
            cout << endl
                 << "Note : Please Enter Marks Below 100.";
        }
        else
        {
            cout << endl
                 << "Total Marks : " << total << endl;
        }

        // cout << "Total Marks : " << total << endl;
        // cin >> total >> endl;

        per = total / 3;

        if (per < 0 || per > 100)
        {
            cout << endl
                 << "Sorry " << sname << ", Your Result not Valid!";
        }
        else
        {
            cout << "Percentage : " << per << endl;
        }

        // cin >> percentage >> endl;
    }
};

class Grade : public Result
{
public:
    gr()
    {
        if (per > 100 || per < 0)
        {
            cout << "";
        }
        else if (per >= 95 && per <= 100)
        {
            cout << sname << ", You have Earned A++ Grade";
        }
        else if (per >= 85 && per < 95)
        {
            cout << sname << ", You have Earned A+";
        }
        else if (per >= 80 && per < 85)
        {
            cout << sname << ", You have Earned B+";
        }
        else if (per >= 70 && per < 80)
        {
            cout << sname << ", You have Earned B";
        }
        else if (per >= 55 && per < 70)
        {
            cout << sname << ", You have Earned C";
        }
        else if (per >= 45 && per < 55)
        {
            cout << sname << ", You have Earned D";
        }
        else if (per >= 33 && per < 45)
        {
            cout << sname << ", You have Earned E";
        }
        else
        {
            cout << sname << ", You are Failed in Examination.";
        }
    }
};

class MarkSheet : public Grade
{
public:
    DisplayMarksheet()
    {
        cout << "\t" << sname << " Mark Sheet\t";
        cout << "\t==============================================\t";
        cout << "Name                 : " << sname << endl;
        cout << "Roll No.             : " << sno << endl;
        cout << "\t" << "Marks\t";
        cout << "PHP                  : " << php << endl;
        cout << "JAVA                 : " << java << endl;
        cout << "PYTHON               : " << python << endl;
        cout << "Total Marks          : " << total << endl;
        cout << "Percentage           : " << per << endl;
        // cout << "Grade                : " << gr << endl;
    }
};

main()
{
    MarkSheet obj;
    obj.student();
    obj.subject();
    obj.percentage();
    obj.DisplayMarksheet();
    obj.gr();
}

// **********************************************************I
#include <iostream>
using namespace std;

char sname[10];
int sno, php, java, python, total;
float per;

class Details
{
public:
    student()
    {
        // char sname[10];
        // int sno;

        cout << "Enter Student Name : ";
        cin >> sname;
        cout << "Enter Student Roll no. : ";
        cin >> sno;
    }
};

class Marks : public Details
{
public:
    subject()
    {
        // int php, java, python;
        cout << "Enter the Marks." << endl;

        cout << "PHP : ";
        cin >> php;

        // if (php <= 0 && php >= 100)
        // {
        //     cout << "Error : Please Enter marks Below 100.";
        // }

        cout << "JAVA : ";
        cin >> java;

        // if (java <= 0 && java >= 100)
        // {
        //     cout << "Error : Please Enter marks Below 100.";
        // }

        cout << "PYTHON : ";
        cin >> python;

        // if (python <= 0 && python >= 100)
        // {
        //     cout << "Error : Please Enter marks Below 100.";
        // }
    }
};

class Result : public Marks
{
public:
    percentage()
    {
        // int total = PHP + JAVA + PYTHON;
        // float percentage;

        total = php + java + python;

        if (total > 300 || total < 0)
        {
            cout << endl
                 << "Note : Please Enter Marks Below 100.";
        }
        else
        {
            cout << endl
                 << "Total Marks : " << total << endl;
        }

        // cout << "Total Marks : " << total << endl;
        // cin >> total >> endl;

        per = total / 3;

        if (per < 0 || per > 100)
        {
            cout << endl
                 << "Sorry " << sname << ", Your Result not Valid!";
        }
        else
        {
            cout << "Percentage : " << per << endl;
        }

        // cin >> percentage >> endl;
    }
};

class Grade : public Result
{
public:
    grade()
    {
        if (per > 100 || per < 0)
        {
            cout << "";
        }
        else if (per >= 95 && per <= 100)
        {
            cout << endl
                 << sname << ", You have Earned A++ Grade";
        }
        else if (per >= 85 && per < 95)
        {
            cout << sname << ", You have Earned A+";
        }
        else if (per >= 80 && per < 85)
        {
            cout << sname << ", You have Earned B+";
        }
        else if (per >= 70 && per < 80)
        {
            cout << sname << ", You have Earned B";
        }
        else if (per >= 55 && per < 70)
        {
            cout << sname << ", You have Earned C";
        }
        else if (per >= 45 && per < 55)
        {
            cout << sname << ", You have Earned D";
        }
        else if (per >= 33 && per < 45)
        {
            cout << sname << ", You have Earned E";
        }
        else
        {
            cout << sname << ", You are Failed in Examination.";
        }
    }
};

class MarkSheet : public Grade
{
public:
    DisplayMarksheet()
    {
        cout << endl
             << endl
             << "\t\t" << sname << " Mark Sheet\t";
        cout << endl
             << "\t===============================================\t" << endl;
        cout << "\tName                 : " << sname << endl;
        cout << "\tRoll No.             : " << sno << endl;
        cout << "-----------------------------------------------\t" << endl;
        cout << "\t\t" << "Marks\t" << endl;
        cout << "\tPHP                  : " << php << endl;
        cout << "\tJAVA                 : " << java << endl;
        cout << "\tPYTHON               : " << python << endl;
        cout << "-----------------------------------------------\t" << endl;
        cout << "\tTotal Marks          : " << total << endl;
        cout << "\tPercentage           : " << per << endl;
        //        cout << "\t" << grade();
        // cout << "Grade                : " << grade << endl;
    }
};

main()
{
    MarkSheet obj;
    obj.student();
    obj.subject();
    obj.percentage();
    obj.DisplayMarksheet();
    obj.grade();
}