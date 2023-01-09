#!/usr/bin/python3
def safe_function(fct, *args):
    import sys
    try:
        return(fct(*args))
    except(TypeError, ValueError)as error:
        sys.stderr.write("Exception: {}\n".format(error))
        return False
