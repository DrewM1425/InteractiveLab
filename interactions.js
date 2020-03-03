var changePic = function(that,picName)
{
    d3.select(that)
        .attr("src", picName);
}

var overflow = function()
{
    d3.select("body")
      .style("background-image", "url('castle_background.webp')");
    
    d3.select("body")
      .style("color", "black");
    
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You win!");
    d3.select("body")
      .append("img")
        .attr("src", "crown.jpg");
    d3.select("body")
      .append("h3").text("Luckily for you, a more experienced programmer has already made a solution to slaying dragons. Thank goodness for the Internet!");
}

var magic = function()
{
    d3.select("body")
      .style("background-image", "url('castle_background.webp')");
    
    d3.select("body")
      .style("color", "black");
    
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You win!");
    d3.select("body")
      .append("img")
        .attr("src", "crown.jpg");
    d3.select("body")
      .append("h3").text("Congratulations, wizard! You have banished the dragon from this realm. Students of Hogwarts will hear of your bravery for generations to come.");
}

var charge = function()
{
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You lose...");
    d3.select("body")
      .append("img")
        .attr("src", "dead.webp");
    d3.select("body")
      .append("h3").text("While charging the dragon, you trip on a unfortunately placed rock and swiftly become dragon food.");
}

var runaway = function()
{
    d3.select("body")
      .style("background-image", "url('forest_background.jpg')");
    
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You lose...");
    d3.select("body")
      .append("img")
        .attr("src", "dragon-36748_960_720.png");
    d3.select("body")
      .append("h3").text("You ran away, only to be forgotten by history. For accomplishing nothing. But you lived so good for you.");
}

var fightProgrammer = function()
{
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You lose...");
    d3.select("body")
      .append("img")
        .attr("src", "dead.webp");
    d3.select("body")
      .append("h3").text("You died! Really? You thought a computer programmer could fight a dragon?");
}

var fightWizard = function()
{
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You lose...");
    d3.select("body")
      .append("img")
        .attr("src", "dead.webp");
    d3.select("body")
      .append("h3").text("You died! Unfortunately for you, wizards are not skilled at hand-to-hand combat. With dragons. Bad choice.");
}

var fightKnight = function()
{
    d3.select("body")
      .style("background-image", "url('castle_background.webp')");
    
    d3.select("body")
      .style("color", "black");
    
    d3.selectAll("img").remove();
    d3.selectAll("p").remove();
    d3.select("body")
      .text("You win!");
    d3.select("body")
      .append("img")
        .attr("src", "crown.jpg");
    d3.select("body")
      .append("h3").text("You have slain the dragon, brave knight! History will forever remember you for your great deeds to mankind.");
}


var part2Knight = function()
{
    d3.select("body")
      .style("background-image", "url('cave_background.jpg')");
    
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
    })
       .on("click", function()
           {
            runaway();
    })
    ;
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
    ).on("click", function()
           {
            fightKnight();
    });
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
    
    ).on("click", function()
           {
            charge();
    });
}

var part2Wizard = function()
{
    d3.select("body")
      .style("background-image", "url('cave_background.jpg')");
    
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
    ).on("click", function()
           {
            runaway();
    });
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
    
    
    ).on("click", function()
           {
            fightWizard();
    });
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
    ).on("click", function()
           {
            magic();
    });
}

var part2Programmer = function()
{
    d3.select("body")
      .style("background-image", "url('cave_background.jpg')");
    
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
    
    
    ).on("click", function()
           {
            runaway();
    });
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
    
    ).on("click", function()
           {
            fightProgrammer();
    });
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
    
    ).on("click", function()
           {
            overflow();
    });
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


