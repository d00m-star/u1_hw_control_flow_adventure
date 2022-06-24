//referenced Michael's adventure game code, a little bit of google, my memory
alert('Welcome to the Dunngeon!')

let playerName = prompt('What is your name, warrior?')

let weaponChoice = prompt(
  `Greetings ${playerName}, please choose a weapon: SWORD, SPEAR, FRYING PAN, SLING-SHOT.`
)

switch (weaponChoice) {
  case 'SWORD':
    alert('Tried and true, a weapon of the finest warriors!')
    break
  case 'SPEAR':
    alert('Inflict great damage, yet keeping yourself distanced! Wise choice.')
    break
  case 'FRYING PAN':
    alert("Blunt damage, but not the most practical weapon...don't ya think?")
    break
  case 'SLING-SHOT':
    prompt(
      'Maximum distance, but you might need some ammo... How many rocks will you take?'
    )
    break
  default:
    alert('It would be unwise to go without a weapon...reconsider!')
    break
}

confirm(
  `You chose ${weaponChoice}, are you sure this is what you wish to bring?`
)

alert(`You brandish your ${weaponChoice} and begin your adventure`)

const choosePath = () => {
  let pathChoiceOne = prompt(
    "You walk upon the Forest of Dah'ness with an option of three entraces, which path do you take? MIDDLE, LEFT, or RIGHT?"
  )
  if (pathChoiceOne === 'MIDDLE') {
    let middlePath = prompt(
      `You see a goblin staring back at you with a disgusted look on his face. He swings his dagger at you. Do you BLOCK with your ${weaponChoice}, RUN away, or attempt to STRIKE first?`
    )
    if (middlePath === 'RUN') {
      alert(
        `Realizing you ate Taco Bell earlier, you attempt to run back home for relief, but you trip and fall...hitting your head on a rock. Goodnight`
      )
    } else if (middlePath === 'BLOCK') {
      alert(
        `You attempt to block with your ${weaponChoice}, but you ate some Taco Bell earlier (grumble, grumble), so your block misses... You die.`
      )
    } else {
      alert(
        `You swing your ${weaponChoice} at the goblin. Just before you swing, the Taco Bell you ate earlier comes back to say hello. You miss your swing, and you are murdered by a goblin. Try again.`
      )
    }
  } else if (pathChoiceOne === 'LEFT') {
    let leftPath = prompt(
      `You come across a hallow log shining a golden light from it's opening. Do you INSPECT the log, TURN BACK, or SIT on the log for a while?`
    )
    if (leftPath === 'TURN BACK') {
      alert(
        `A wild mongoose appears! He gives you a lollipop. You frolick home happily.`
      )
    } else if (leftPath === 'INSPECT') {
      alert(
        `You duck down to look inside the log a bit closer, it appears to be a golden $5 box from Taco Bell full of spicey burritos.(Grumble, grumble) You die from dehydration.`
      )
    } else {
      alert(
        `You sit on the log. Wondering how you're going to finish this coding homework in reasonable time. You die from dehydration. `
      )
    }
  } else if (pathChoiceOne === 'RIGHT') {
    let rightPath = prompt(
      `You come to a small bridge leading across a tiny creek. On this bridge a large man named 'Little John' blocks the way. Do you FIGHT 'Little John', JUMP over the creek, or RUN away?`
    )
    if (rightPath === 'FIGHT') {
      alert(
        `You attempt to strike 'Little John' with your ${weaponChoice}, he dodges and pops you a good one. Goodnight.`
      )
    } else if (rightPath === 'JUMP') {
      alert(
        `You jump over the creek, and escape the threat of 'Little John' You ponder that code you're supposed to finish. You die from dehydration.`
      )
    } else {
      alert(
        `You run away to finish your coding project, it is getting late after all. You die from dehydration.`
      )
    }
  }
}

choosePath()
