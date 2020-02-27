var changePic = function(that,picName)
{
    d3.select(that)
        .attr("src", picName);
}


var part2Knight = function()
{
    d3.select("p")
      .append("h2")
        .text("Choose your action!");
    
    d3.select("p")
        .append("img")
        .attr("src","run_away.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "Run_away_Phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "run_away.png")
    }        
           
           
           
           );
    d3.select("p")
        .append("img")
        .attr("src","fight.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "fight_phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "fight.png")
    }        
    );
    d3.select("p")
        .append("img")
        .attr("src","charge.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "charge_phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "charge.png")
    }        
    
    );
}

var part2Wizard = function()
{
    d3.select("p")
      .append("h2")
        .text("Choose your action!");
    
    d3.select("p")
        .append("img")
        .attr("src","run_away.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "Run_away_Phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "run_away.png")
    }        
    );
    d3.select("p")
        .append("img")
        .attr("src","fight.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "fight_phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "fight.png")
    }
    
    
    );
    d3.select("p")
        .append("img")
        .attr("src","magic.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "magic_phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "magic.png")
    }
    
    );
}

var part2Programmer = function()
{
    d3.select("p")
      .append("h2")
        .text("Choose your action!");
    
    d3.select("p")
        .append("img")
        .attr("src","run_away.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "Run_away_Phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "run_away.png")
    }        
    
    
    );
    d3.select("p")
        .append("img")
        .attr("src","fight.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "fight_phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "fight.png")
    }
    
    );
    d3.select("p")
        .append("img")
        .attr("src","stack_overflow.png")
        .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "stack_phrase.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "stack_overflow.png")
    }
    
    );
}



d3.select("#knight")
  .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "knight_text.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "armour_PNG28.png")
    })
  .on("click", function()
    {
        d3.select("#wizard").remove();
        d3.select("#programmer").remove();
        d3.select("#narrative").remove();
        d3.select("body").append("h2").text("You have chosen the brave knight.");
        
        d3.select(this).on("click", function()
                          {});
        part2Knight();
    });

d3.select("#wizard")
   .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "wizard_text.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "wizard.jpg")
    })
  .on("click", function()
    {
        d3.select("#knight").remove();
        d3.select("#programmer").remove();
        d3.select("#narrative").remove();
        d3.select("body").append("h2").text("You have chosen the wise wizard.");
        d3.select(this).on("click", function()
                          {});
        part2Wizard();
    });

d3.select("#programmer")
  .on("mouseover", function()
           {
            d3.select(this)
              .attr("src", "programmer_text.png");
    })
       .on("mouseleave", function()
          {
            d3.select(this)
              .attr("src", "computer_programmer.jpg")
    })
  .on("click", function()
    {
        d3.select("#wizard").remove();
        d3.select("#knight").remove();
        d3.select("#narrative").remove();
        d3.select("body").append("h2").text("You have chosen the aspiring computer programmer.");
        d3.select(this).on("click", function()
                          {});
        part2Programmer();
    });


