<!DOCTYPE html>
<html lang="pt-br">
<head>
<title>Parâmetros </title>
</head>
<body>
<h1>Parâmetros </h1>
<ul>
<%
 
 dim Params, ArrayOfParams
 If Request.Form <> "" And Request.QueryString <> "" Then
	Params = Request.Form & "&" & Request.QueryString
 ElseIf Request.Form <> "" Then
	Params = Request.Form
 Else
	Params = Request.QueryString
 End If
 ArrayOfParams = Split(Params, "&")

 For Each Param In ArrayOfParams
	Response.Write ("<li>")
	Response.Write (Param)
	Response.Write ("</li>")
 Next
 %>
</ul>
</body>
</html>