<?php

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

/**
 * @param $date
 * @return string
 */
function formaterDate($date)
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

/**
 * The above function saves the file to the storage directory.
 *
 * @param Request request The request object
 * @param string key_name The name of the file in the form
 * @param string name_directory_storage The name of the directory where the file will be
 * saved.
 *
 * @return string The path of the file saved in the storage directory.
 */
function saveFileToStorageDirectory(Request $request, string $key_name, string $name_directory_storage = ""): string
{
    $imageName = time() . '_' . trim(str_replace(" ", "_", $request->file($key_name)->getClientOriginalName()));
    $path =  DIRECTORY_SEPARATOR . "storage" . DIRECTORY_SEPARATOR . $request->file($key_name)->storeAs($name_directory_storage, $imageName, 'public');
    return $path;
}
