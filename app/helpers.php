<?php

use Carbon\Carbon;

/**
 * @param $date
 * @return string
 */
function formaterDate(string $date)
{
    return Carbon::parse($date)->format('d M. Y');
}
/**
 * @param $date
 * @return string
 */
function formaterDateWithTime(string $date)
{
    return Carbon::parse($date)->format('d M. Y H:i');
}
