<?php declare(strict_types=1);

namespace App\Filters\v1;

class Filter
{
    /*    protected array $safeParams = [
            'name' => ['eq'],
            'email' => ['eq'],
            'q' => ['eq'],
            'postalCode' => ['eq', 'gt', 'lt'],
        ];
        protected array $columMap = [
            'postalCode' => 'postal_code'
        ];
        protected array $operatorMap = [
            'eq' => '=',
            'lt' => '<',
            'lte' => '<=',
            'gt' => '>',
            'gte' => '>='
        ];*/
    protected array $safeParams = [];
    protected array $columMap = [];
    protected array $operatorMap = [];

}
