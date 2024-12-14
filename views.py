from flask import Blueprint, render_template,request


url = Blueprint('url',__name__)


@url.route('/')
def index():
    # if request.method == 'POST':
    #     uname = request.form.get('uname')
    #     password = request.form.get('password')
    #     form = [uname,password]
    return render_template('Portfolio.html')


@url.route('/aboutme')
def Aboutme():
    return render_template('about.html')
   