var player = videojs('demoplayer');
let tracks = player.textTracks();
console.log(tracks);

var options = {};
options.forwardButton = 'images/ico_player_30sforward.png';
options.vjsToggleDiv1 = 'images/ico_player_30sforward.png';
options.rewindButton = 'images/ico_player_30sback.png';
options.title = 'Ocean fish deep dive';
options.newsTicker =
  '<div class="tickerWrap" style="cursor: pointer"><div class="ticker"><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797372723720200" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>Manusia kalau sudah mati disebut juga bangkai 🙏 Terkait halalnya bangkai manusia, Liat gak film kapal titanic keti…https://t.co/oFgXt9fpQm</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797308748071000" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>RT @Miguel_Boggiano: Alberto Fernández se hubiera colado para subirse a los botes del Titanic porque no es delito</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797372723720200" class="markerHref"><img alt="" style="margin-bottom:-8px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>Manusia kalau sudah mati disebut juga bangkai 🙏 Terkait halalnya bangkai manusia, Liat gak film kapal titanic keti…https://t.co/oFgXt9fpQm</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797308748071000" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>RT @Miguel_Boggiano: Alberto Fernández se hubiera colado para subirse a los botes del Titanic porque no es delito</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797372723720200" class="markerHref"><img alt="" style="margin-bottom:-8px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>Manusia kalau sudah mati disebut juga bangkai 🙏 Terkait halalnya bangkai manusia, Liat gak film kapal titanic keti…https://t.co/oFgXt9fpQm</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797308748071000" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>RT @Miguel_Boggiano: Alberto Fernández se hubiera colado para subirse a los botes del Titanic porque no es delito</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797372723720200" class="markerHref"><img alt="" style="margin-bottom:-8px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>Manusia kalau sudah mati disebut juga bangkai 🙏 Terkait halalnya bangkai manusia, Liat gak film kapal titanic keti…https://t.co/oFgXt9fpQm</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797308748071000" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>RT @Miguel_Boggiano: Alberto Fernández se hubiera colado para subirse a los botes del Titanic porque no es delito</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797372723720200" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>Manusia kalau sudah mati disebut juga bangkai 🙏 Terkait halalnya bangkai manusia, Liat gak film kapal titanic keti…https://t.co/oFgXt9fpQm</a></div><div class="tickerItem"><a target="_blank" href="https://twitter.com/Titanic/status/1364797308748071000" class="markerHref"><img style="margin-bottom:-8px;" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALiSURBVEhL7ZVbSBRRGMfPOXPmsrNe1hVXSxftoi6pGBWIZmwRUWBhEfnSQ0GIj9FzySKBQURYUG9FT1EpQWUSWRldHjTIS2EWWRq6aRddd3V3Z3ZnTrNyjJadmTZ7q/0xzOH7c875z3zn+2ZAihT/HJCOy8bdQ3ApCbv9syEXgESZJGl9T/dz/drWhE7R5a+MPT3zeXMK6PbOySWEAC6mqQCEbDy67w0y5wMS2DFD+LvDh7hniwt+AdExkSr5OHATgUa6+Bl4zuuTy5dMY2gbWgKSWp+JIw/z7SB7LMC+Bx6S4GNoXFY9XVdZO/Vo89nxMirFcdNPamdm5Qa9fC5pghJtrFvp2wNaoJaIeAyNrTnkSfF6vnqFM63P5RnqWHPmTU3llU/5u29Pivd8qt0ZUY8FI6bHGA0i9nD7oO0SjeMwPOPsI6+2FpSmd5aszrDG4mBECbMMnGIZNL3OgcViG7P21lvJsjhZhyiA3tH0zNqhnegjleLQf2PPDa7IbbflF2aMUwWILCOwCBVpeawano5WmJnGUAEJDkkwQMME9I1bDkSyeaFNZIiLKn+MH+MJEAZ+GiZgcMZaD2J0FQJoWAO/4wMv3gENUKZhAoYb99ptpyMIdqFldPoCj78sqNFOGupiaDy3DfpGsNjMZfDdVEoaCaHH3yZe6xbVEqapFBcUa8AnV9MwKVQBh0YZthU0bYpQSRdT45cjluefZb5RUuHP6jZDhUD+KnDNY7v4QSoZYl482hen96B47R1GG5FVuIhNZqsIyPOO9FO5M3wblUxh6GiIcEF1FhD5aBaKNqkEsFROwJ8jejK3cK3t5VChkim6Neu4LFVwHKnPI/JeG6OsEhhit+g8YqziVQ73z4rciQfbhS4qJ4VhsxRcVy2KP7rBAcP7LFhxcZBYswSQgxDQLiLn2gTvC8CeLLTigY4aFKLLkia5LvUQrN21X993DJx2AhQYBk3QtGpTpPjfAOAHRS3zTwBc4MAAAAAASUVORK5CYIKq9DU0cV85kaZeI6Fd6KPJjHDSSbGbcQyZj5yfZQ451aU2YhX6xWBbJzXvoNOi/8YbEYUj89sZqs+SXB1HRvTdfPxMOrn5bMJ7+Fbsk+t3KF8MP8y+kU8weW/Xku6Een+51Hp3MvpxKGl+ZFGOSJV6vK8RtVDSboBTb/Z/KsTmsvKdc4k3Qyl6E+Eqtae/EW3L14TFdzwj3k68odKr7awLpPZJHA7QNhOsVd8ZrEcHaHnL4e1n5D3MlMn6XvNaxocMLBejzDoFzddxEPWbf/wqTBNUYVi3JOdWKa3D9aj3VpmgmhH5E+PpWi7xqmAYd5kXHWKlYBBfQFiFrMuERIXyfr8OL0Q2Ivt7IUqXVGla2sK7+EE/N99UKaS3CYxRbQlwCHsDPC6WOJAW6xvmdBV4ERQV+ka+y/KHR1n4UtuU/9Xocv6ojeQKoUMRL4NREQO4AFhWYEVeQKIHsAjpLA/T2d1ohjJYF+4m4CbgJuAm4CbgJuAmcDsl8Bdl3GgQ0T4PaQAAAABJRU5ErkJggg=="/>RT @Miguel_Boggiano: Alberto Fernández se hubiera colado para subirse a los botes del Titanic porque no es delito</a></div></div></div>';

options.SubtitleTexTrack =
  '<div id="shoeHideDiv" style="display: none";><h2>An ordered HTML list</h2><ol><li>Coffee</li><li>Tea<li><li>Milk<li></ol></div>';

var vjsButton = videojs.getComponent('Button');

var vjsForwardButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.forwardButton) {
      this.updateForwardButton(options.forwardButton);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() + 30);
  },
  buildCSSClass: function () {
    return 'vjs-forward-button';
  },
  updateForwardButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Forward',
      })
    );
  },
});
videojs.registerComponent('vjsForwardButton', vjsForwardButton);
player.getChild('controlBar').addChild('vjsForwardButton', options);

var vjsRewindButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.rewindButton) {
      this.updateRewindButton(options.rewindButton);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() - 30);
  },
  buildCSSClass: function () {
    return 'vjs-rewind-button';
  },
  updateRewindButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Rewind',
      })
    );
  },
});
videojs.registerComponent('vjsRewindButton', vjsRewindButton);
player.getChild('controlBar').addChild('vjsRewindButton', options);

var vjsTitle = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.title) {
      this.updateTitle(options.title);
    }
  },

  buildCSSClass: function () {
    return 'vjs-title';
  },
  updateTitle: function (title) {
    if (typeof title !== 'string') {
      title = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), title);
  },
});
videojs.registerComponent('vjsTitle', vjsTitle);
player.getChild('controlBar').addChild('vjsTitle', options);

var vjsToggleDiv = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.vjsToggleDiv1) {
      this.updateButton(options.vjsToggleDiv1);
    }
  },
  handleClick: function () {
    //document.getElementById('shoeHideDiv').style.display = 'none';
    var e = document.getElementById('shoeHideDiv');
    if (e.style.display == 'block') e.style.display = 'none';
    else e.style.display = 'block';
  },
  buildCSSClass: function () {
    return 'vjs-forward-button-new';
  },
  updateButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Toggle',
      })
    );
  },
});
videojs.registerComponent('vjsToggleDiv', vjsToggleDiv);
player.getChild('controlBar').addChild('vjsToggleDiv', options);

var vjsSubTitleTextTrack = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.SubtitleTexTrack) {
      this.updateSubtitleTexTrack(options.SubtitleTexTrack);
    }
  },

  buildCSSClass: function () {
    return 'vjs-title2';
  },
  updateSubtitleTexTrack: function (SubtitleTexTrack) {
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('div', {
        innerHTML: SubtitleTexTrack,
      })
    );
  },
});
videojs.registerComponent('vjsSubTitleTextTrack', vjsSubTitleTextTrack);
player.getChild('controlBar').addChild('vjsSubTitleTextTrack', options);

/* var vjsNewsTicker = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.newsTicker) {
      this.updateNewsTicker(options.newsTicker);
    }
  },
  buildCSSClass: function () {
    return 'vjs-news_ticker';
  },
  updateNewsTicker: function (newsTicker) {
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('div', {
        innerHTML: newsTicker,
      })
    );
  },
});
videojs.registerComponent('vjsNewsTicker', vjsNewsTicker);
player.getChild('controlBar').addChild('vjsNewsTicker', options);
 */
