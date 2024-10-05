# def f(n):
#     if n==1:
#         return True
#     if n<0:
#         return False
#     return f(n//10) or f(n//20)
def fun(n,x):
    if n==x:
        return True
    if n<x:
        return False
    return fun(n,x*10) or fun(n,x*20) 
if __name__=="__main__":
    n = 20
    x = 1
    if (f(n)):
        print("Yes")
    else:
        print("No")
