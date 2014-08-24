Answers for index.ejs

1.

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" ng-app="introToAngularApp"> <![endif]--> 
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" ng-app="introToAngularApp"> <![endif]--> 
<!--[if IE 8]>         <html class="no-js lt-ie9" ng-app="introToAngularApp"> <![endif]--> 
<!--[if gt IE 8]><!--> <html class="no-js" ng-app="introToAngularApp"> <!--<![endif]--> 

2.

<form class="form form-inline">
    <div class="form-group">
        <input ng-model="user.name" class="form-control" type="text" placeholder="Name" />
    </div>
    <div class="form-group">
        <input ng-model="user.email" class="form-control" type="text" placeholder="Email" />    
    </div>
    <div class="form-group">
        <select ng-model="user.emailType" class="form-control">
            <option>Work</option>
            <option>Home</option>    
        </select>
    </div>
    <div class="form-group">
        <textarea ng-model="user.comment" class="form-control"></textarea>
    </div>
</form>

<div>Name: {{user.name}}</div>
<div>Email: {{user.email}}</div>
<div>Type: {{user.emailType}}</div>
<div>Comment: {{user.comment}}</div>