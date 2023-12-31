<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class PaginateType extends Enum
{
    const OptionOne = 0;
    const OptionTwo = 1;
    const OptionThree = 2;
    const standards = 15;
}
