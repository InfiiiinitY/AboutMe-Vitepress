<div class="centerTitle">
    <h1>ChronoDiff</h1>
</div>

## The idea

The company I work for uses _industrial hours_ to calculate working hours.
Meaning that if you work for 6h45m, that equals 6,75h.
If you're like me and always have to double-check everything, it can be quite time-consuming or just plain uncomfortable to always calculate
whether the billed working hours are correct.

I wanted a simple CLI tool that would allow me to specify a start and end time.
The tool then calculates the time worked in industrial hours—including break times.

I didn't find any such tools online, and if there were any I found them too bloated fo my use case.
Hence, I build myself a simple cli tool that does that for me. Enter _ChronoDiff_.

## The setup

I decided to learn something new in the process and since everyone was talking about _Go_ at the time, I decided on that as the programming language.

Installing _Go_ is as easy as following the official [installation guide](https://go.dev/doc/install).

I also installed the [go-pretty](https://github.com/jedib0t/go-pretty) package to get some pretty tables as an output.

## What it is now

To keep it simple, here is part of the [ReadMe](https://github.com/InfiiiinitY/ChronoDiff?tab=readme-ov-file#usage):

>To use ChronoDiff, simply provide two timestamps as input. The tool will output the difference between them.
>
>```powershell
>chronodiff --start "06:25" --end "15:13"
>```
>
>**Output:**
>
>```
>+---------------+---------+------------+
>| #             |  NORMAL | INDUSTRIAL |
>+---------------+---------+------------+
>| Without break | 8h48m0s |        8.8 |
>| With break    |  8h3m0s |       8.05 |
>+---------------+---------+------------+
>```
>
>By default, Chronodiff defaults to a break time of 45 minutes. This can be changed by providing a different amount of minutes.
>
>```powershell
>chronodiff --start "6:25" --end "15:13" --break 60
>```
>
>**Output:**
>
>```
>+---------------+---------+------------+
>| #             |  NORMAL | INDUSTRIAL |
>+---------------+---------+------------+
>| Without break | 8h48m0s |        8.8 |
>| With break    | 7h48m0s |        7.8 |
>+---------------+---------+------------+
>```
