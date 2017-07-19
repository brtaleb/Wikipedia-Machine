

function getWiki()
{	
	j=0;
	var seek=$("#seek").val();
	var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+seek+"&format=json&callback=?";

	$.ajax({
		type:"GET",
		url:url,
		async:false,
		dataType:"json",
		success:function(data){
			$("#test").empty();
			for(i=0; i<data[1].length; i++)
			{
				j++;
				t1=data[1][i];
				t2=data[2][i];
				t3=data[3][i];
				di=$("<div class='di'></div>");
				$(di).html("<a id='lin' target='_blank' href='"+t3+"'><b style='background-color:grey'>"+t1+"</a></b><br>"+t2);
				$("#test").append(di);
			}					
		}
	})
}


$(document).ready(function(){
	$("#butr").on("click",function(){
		window.open("https://en.wikipedia.org/wiki/Special:Random");
	})
	
	$("#ok").on('click', getWiki);
	$("#seek").keypress(function(e){
		if(e.which == 13)
		{
			$("#ok").click();
		}
	});		
});